import React from "react";
import {Modal} from 'reactstrap'
import {useHistory} from "react-router-dom";
import {CheksProduct,NextPage,CheckModal,Page} from './shopCard'


function SellModal({isOpen,toggle}) {
    toggle = () => {
        his.push('/sale')
    }
    const his = useHistory();
    return(
        <Modal isOpen={isOpen} className={'ModalShop'} toggle={toggle}>
            <CheksProduct>
               <CheckModal><i className="fas fa-check-circle"/></CheckModal>
                <Page>Товар продано</Page>
                <NextPage onClick={toggle} >Закрыть</NextPage>
            </CheksProduct>
        </Modal>
    )
}
export default SellModal;