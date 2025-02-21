import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="image-gallery">
      <img
        src="/Image 1.png"
        alt="Imagem 1"
        onMouseEnter={() => openModal('Eu')}
      />
      <img
        src="/Image 2.png"
        alt="Imagem 2"
        onMouseEnter={() => openModal('Te')}
      />
      <img
        src="/Image 3.png"
        alt="Imagem 3"
        onMouseEnter={() => openModal('Amo')}
      />

      {/* Modal */}
      <div className={`Modal__Overlay ${isOpen ? 'show' : ''}`} onClick={closeModal}>
        <div className={`Modal__Content ${isOpen ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
          <h2>{modalContent}</h2>
          <button onClick={closeModal}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default App;
