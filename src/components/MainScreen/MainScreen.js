import './main.scss'
import Button from  '../Button/Button'
import Modal from '../Modal/Modal'
import { connect } from 'react-redux';
import { openModal } from './../../actions/index';
import { useEffect } from 'react';

const MainScreen = ({ isOpen, openModal }) =>  {
  useEffect(() => {
  }, [isOpen]);

  return (
    <div className={`${isOpen ? 'modal-backdrop' : ''}`}>
      <div className='main-container'>
        <Button text='Modal A' variant='a' onClick={() => openModal('A')} />
        <Button text='Modal B' variant='b' onClick={() => openModal('B')}/>
      </div>
        {isOpen && (
          <Modal type="A" show={isOpen} />
        )}
    </div>
  )
};

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
});

const mapDispatchToProps = {
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);