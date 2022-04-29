import React from 'react';

interface ImetaSpaceCard {
    text: string,
    iconPath: string,
    onClick?: any,
    active?: boolean,
}


const MetaSpecCard = ({ onClick, iconPath, text, active }: ImetaSpaceCard) => {
    return (
        <div
            className="meta_specs_card"
            data-active={active}
            key={Math.random()}
            style={{ cursor: `${onClick ? 'pointer' : 'default'}` }}
            onClick={onClick}>
            <div
                className="icon"
                style={{
                    backgroundImage: `url('${iconPath}')`
                }} />
            <p className="f-size-p2 f-weight-400 f-font-general">
                {text}
            </p>
        </div >
    );
};

export default MetaSpecCard;