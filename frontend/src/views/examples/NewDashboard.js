// 1. Import các thư viện và component cần thiết
import React from "react";
// Import Header component
import Header from "components/Headers/Header.js";
import LearningTimeChart from './LearningTimeChart.js';
import ConnectionManager from './LearningTimeChart.js';
// 2. Tạo component mới
class NewDashboard extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="content">
          <h1>Welcome to the new dashboard!</h1>
          {/* Thêm nội dung của bạn vào đây */}
          <LearningTimeChart />
          {/* Thêm ô vuông chứa iframe */}
          {/* <div style={{
            width: '100%', // Chiều rộng cố định
            height: '800px', // Chiều cao cố định
            backgroundColor: 'white', // Màu nền trắng
            border: '1px solid black', // Viền
            display: 'flex', // Sử dụng flexbox để căn giữa iframe
            justifyContent: 'center', // Căn giữa theo chiều ngang
            alignItems: 'center', // Căn giữa theo chiều dọc
          }}>
            <iframe
              allow="camera; microphone; fullscreen; display-capture; autoplay"
              src="https://meet.jit.si/consliasdc"
              style={{ height: '100%', width: '100%', border: '0px' }}
            />
          </div> */}
        </div>
      </>
    );
  }
}

// 3. Export component
export default NewDashboard;
