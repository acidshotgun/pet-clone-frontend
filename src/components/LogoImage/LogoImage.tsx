import styles from "./LogoImage.module.scss";

interface ILogoImage {
  image: string | undefined;
}

const LogoImage = ({ image }: ILogoImage) => {
  return <img className={styles.logoImage} src={image} alt="#"></img>;
};

export default LogoImage;
