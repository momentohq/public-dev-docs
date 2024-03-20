import React from 'react';
import styles from './LinkButton.module.css';
import { IoArrowForwardOutline, IoOpenOutline } from "react-icons/io5";

type LinkButtonProps = {
    text: string;
    link: string;
    openInNewTab?: boolean;
    imgSrc?: string;
    altText?: string;
    isAlpha?: boolean;
};

export const LinkButton: React.FC<LinkButtonProps> = ({ text, link, imgSrc, altText, openInNewTab = false, isAlpha = false }) => {
    const isImageLink = imgSrc && altText;
    if (altText === "Unreal") {
        console.log("altText", altText);
        console.log('isAlpha', isAlpha);
    }
    return (
        !isImageLink ? (
            <div className={styles.card}>
                <a href={link} target={openInNewTab ? "_blank" : "_self"} className={styles.cardLink}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardDescription}>{text}</div>
                        {openInNewTab ? <IoOpenOutline className={styles.navigationIcon}/> :
                            <IoArrowForwardOutline className={styles.navigationIcon}/>}
                    </div>
                </a>
            </div>
        ) : (
            <div className={styles.card}>
                <a href={link} target={openInNewTab ? "_blank" : "_self"} className={styles.cardLink}>
                    <div className={styles.imageCardContent}>
                        <img src={imgSrc} alt={altText} className={styles.image}/>
                        {isAlpha && <span className={styles.alphaTag}>Alpha</span>}
                    </div>
                </a>
            </div>
        ));
};
