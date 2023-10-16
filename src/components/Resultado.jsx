import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: start;
  gap: 1rem;
  padding-top: 10px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.div`
  font-size: 24px;
  margin: 10px 0;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } =
    resultado;
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Imagen cripto"
      />
      <div>
        <Precio>
          El Precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El Precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El Precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacíon últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
