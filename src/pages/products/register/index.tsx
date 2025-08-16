import InputComponent from '../../../components/generic-input';
import {
  Container,
  Footer,
  Header,
  Label,
  ModalContent,
  ModalOverlay,
  PriceQuantityWrapper,
  SelectWrapper,
  Wrapper,
} from './style';

interface ModalRegisterProps {
  isOpen?: boolean;
  onHandleCancel?: () => void;
}

const ModalRegisterProduct = ({ isOpen, onHandleCancel }: ModalRegisterProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onHandleCancel}>
      <Container onClick={e => e.stopPropagation()}>
        <Header>
          <h1>Cadastrar novo produto</h1>
        </Header>
        <ModalContent id="form-register-product">
          <Wrapper>
            <Label>Descrição:</Label>
            <InputComponent hasBorder id="description" noMargin padding={8} placeholder="Digite o nome do produto" />
          </Wrapper>
          <SelectWrapper>
            <div>
              <Label>Categoria</Label>
              <select id="category">
                <option value="CALCA">Calça</option>
                <option value="VESTIDO">Vestido</option>
                <option value="CAMISA">Camisa</option>
                <option value="CAMISETA">Camiseta</option>
              </select>
            </div>
            <div>
              <Label>Color</Label>
              <select id="color">
                <option value="PRETO">Preto</option>
                <option value="BRANCO">Branco</option>
                <option value="CINZA">Cinza</option>
                <option value="MARROM">Marrom</option>
              </select>
            </div>
            <div>
              <Label>Marca</Label>
              <select id="brand">
                <option value="HB">Hugo Boss</option>
                <option value="CK">Calvin Klein</option>
                <option value="PW">Polo Wear</option>
                <option value="Nike">Nike</option>
              </select>
            </div>
            <div>
              <Label>Tamanho</Label>
              <select id="size">
                <option value="PP">PP</option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
              </select>
            </div>
          </SelectWrapper>
          <PriceQuantityWrapper>
            <div className="flex w-full items-center gap-3">
              <Label>P. de custo:</Label>
              <InputComponent
                hasBorder
                type="text"
                id="costPrice"
                placeholder="Preço de custo"
                padding={8}
                required
                noMargin
              />
            </div>
            <div className="flex w-full items-center gap-3">
              <Label>P. de venda:</Label>
              <InputComponent
                hasBorder
                type="text"
                id="salePrice"
                placeholder="Preço de venda"
                padding={8}
                required
                noMargin
              />
            </div>
            <div className="flex w-full items-center gap-3">
              <Label>Qtd:</Label>
              <InputComponent
                hasBorder
                type="number"
                id="quantity"
                placeholder="Quantidade"
                padding={8}
                required
                noMargin
              />
            </div>
          </PriceQuantityWrapper>
          <Footer>
            <button id="save-product">Salvar</button>
            <button id="clear">Limpar</button>
            <button id="cancel-product" onClick={onHandleCancel}>
              Cancelar
            </button>
          </Footer>
        </ModalContent>
      </Container>
    </ModalOverlay>
  );
};

export default ModalRegisterProduct;
