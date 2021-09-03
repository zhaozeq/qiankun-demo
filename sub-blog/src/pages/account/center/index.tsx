import { PlusOutlined, MailOutlined, GithubOutlined, BookOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Divider, Input, Row, Tag } from 'antd';
import React, { useState, useRef } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Link, useRequest } from 'umi';
import type { RouteChildrenProps } from 'react-router';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Applications from './components/Applications';
import type { CurrentUser, tabKeyType } from './data.d';
import { queryCurrent } from './service';
import styles from './Center.less';

const operationTabList = [
  {
    key: 'articles',
    tab: (
      <span>
        文章 <span style={{ fontSize: 14 }}>(8)</span>
      </span>
    ),
  },
  {
    key: 'applications',
    tab: (
      <span>
        应用 <span style={{ fontSize: 14 }}>(8)</span>
      </span>
    ),
  },
  {
    key: 'projects',
    tab: (
      <span>
        项目 <span style={{ fontSize: 14 }}>(8)</span>
      </span>
    ),
  },
];

const TagList: React.FC<{ tags: CurrentUser['tags'] }> = ({ tags }) => {
  const ref = useRef<Input | null>(null);
  const [newTags, setNewTags] = useState<string[]>([]);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [tagIsClose, setTagNeedClose] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const showInput = () => {
    setInputVisible(true);
    setTagNeedClose(true);
    if (ref.current) {
      // eslint-disable-next-line no-unused-expressions
      ref.current?.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let tempsTags = [...newTags];
    if (inputValue && tempsTags.filter((tag) => tag === inputValue).length === 0) {
      tempsTags.push(inputValue);
    }
    setNewTags(tempsTags);
    setInputVisible(false);
    setTagNeedClose(false);
    setInputValue('');
  };

  return (
    <div className={styles.tags}>
      <div className={styles.tagsTitle}>技术栈</div>
      {(tags || []).concat(newTags).map((item, i) => (
        <Tag closable={tagIsClose} key={i}>
          {item}
        </Tag>
      ))}
      {inputVisible && (
        <Input
          ref={ref}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag onClick={showInput} style={{ borderStyle: 'dashed' }}>
          <PlusOutlined />
        </Tag>
      )}
    </div>
  );
};

const Center: React.FC<RouteChildrenProps> = () => {
  const [tabKey, setTabKey] = useState<tabKeyType>('articles');
  //  获取用户信息
  const { data: currentUser, loading } = useRequest(
    () => {
      return queryCurrent();
    },
    { onError: (err) => console.log(err) },
  );

  //  渲染用户信息
  const renderUserInfo = ({ gitHub, CSDN, email }: Partial<CurrentUser>) => {
    return (
      <div className={styles.detail}>
        <p>
          <GithubOutlined
            style={{
              marginRight: 8,
            }}
          />
          <a href={gitHub} target="_blank">
            {gitHub}
          </a>
        </p>
        <p>
          <BookOutlined
            style={{
              marginRight: 8,
            }}
          />
          <a href={CSDN} target="_blank">
            {CSDN}
          </a>
        </p>
        <p>
          <MailOutlined
            style={{
              marginRight: 8,
            }}
          />
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    );
  };

  // 渲染tab切换
  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'projects') {
      return <Projects />;
    }
    if (tabValue === 'applications') {
      return <Applications />;
    }
    if (tabValue === 'articles') {
      return <Articles />;
    }
    return null;
  };

  return (
    <GridContent>
      <Row gutter={1}>
        <Col lg={7} md={24} className={styles.leftCardCol}>
          <Card
            bordered={false}
            loading={loading}
            style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'auto' }}
          >
            {!loading && currentUser && (
              <div>
                <div className={styles.avatarHolder}>
                  <img alt={currentUser.name} src={currentUser.avatar} />
                  <div className={styles.name}>{currentUser.name}</div>
                  <div>{currentUser.profession}</div>
                </div>
                {renderUserInfo(currentUser)}
                <Divider dashed />
                <TagList tags={currentUser.tags || []} />
                <Divider style={{ marginTop: 16 }} dashed />
                <div className={styles.team}>
                  <div className={styles.teamTitle}>工具类</div>
                  <Row gutter={36}>
                    {currentUser.notice &&
                      currentUser.notice.map((item) => (
                        <Col key={item.id} lg={24} xl={12}>
                          <Link to={item.href} replace>
                            <Avatar size="small" src={item.logo} />
                            {item.member}
                          </Link>
                        </Col>
                      ))}
                  </Row>
                </div>
              </div>
            )}
          </Card>
        </Col>
        <Col lg={17} md={24}>
          <Card
            className={styles.tabsCard}
            bordered={false}
            tabList={operationTabList}
            activeTabKey={tabKey}
            onTabChange={(_tabKey: string) => {
              setTabKey(_tabKey as tabKeyType);
            }}
          >
            {renderChildrenByTabKey(tabKey)}
          </Card>
        </Col>
      </Row>
    </GridContent>
  );
};
export default Center;
