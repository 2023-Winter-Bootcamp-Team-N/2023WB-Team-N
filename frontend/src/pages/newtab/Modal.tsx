import React, { useState } from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="modal-overlay"
      style={{
        zIndex: '1000',
        background: '#506DBF',
        top: '50%',
        left: '50%',
        margin: 'auto',
        overflow: 'auto',
        width: '50rem', // 모달의 가로 크기
        height: '40rem', // 모달의 세로 크기
        position: 'fixed', // 고정 위치로 설정
        transform: 'translate(-50%, -50%)', // 중앙 정렬을 위해 위치 조정
        padding: '30px', // 내용과 모달 테두리 간의 여백
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // 그림자 효과 추가
      }}>
      <div className="modal" style={{ display: 'flex' }}>
        <button
          className="text-black px-4 py-0 modal-close"
          style={{
            marginLeft: 'auto',
            marginBottom: '1rem',
            marginRight: '1rem',
            width: '1.5rem', // 원하는 가로 크기
            fontSize: '1.5rem', // 원하는 텍스트 크기
          }}
          onClick={closeModal} // 창 닫기 버튼을 눌렀을 때 동작(모달창 닫음)을 설정
        >
          X
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Modal;
