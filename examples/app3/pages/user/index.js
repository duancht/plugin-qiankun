import React, { useEffect } from 'react';
import { Button, Table } from 'antd';
import { connect } from 'dva';

// @connect(({ user }) => ({ user }))
// export default class extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     const { dispatch } = props;
//     dispatch({
//       type: 'user/query',
//     });
//   }

//   render() {
//     const { user } = this.props;
//     const { list } = user;
//     const columns = [
//       {
//         dataIndex: 'id',
//         title: 'ID',
//       },
//       {
//         dataIndex: 'name',
//         title: 'Name',
//       },
//       {
//         dataIndex: 'email',
//         title: 'Email',
//       },
//     ];

//     return (
//       <div>
//         <Table rowKey="id" columns={columns} dataSource={list} />
//       </div>
//     );
//   }
// }

const UserTable =  ({user, dispatch}) => {

  useEffect(() => {
    dispatch({
      type: 'user/query',
    });
  })

  const { list } = user;
  const columns = [
    {
      dataIndex: 'id',
      title: 'ID',
    },
    {
      dataIndex: 'name',
      title: 'Name',
    },
    {
      dataIndex: 'email',
      title: 'Email',
    },
  ];

  return (
    <div>
      <Table rowKey="id" columns={columns} dataSource={list} />
    </div>
  );
}

export default connect(({ user }) => ({ user }))(UserTable);
