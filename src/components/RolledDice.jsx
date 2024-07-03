import React from 'react';
import styled from 'styled-components';

const RolledDice = ({ rollDice, currentDice }) => {
    

    return (
        <DiceContainer>
            <div className='dice' onClick={rollDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    );
};

export default RolledDice;

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice {
        cursor: pointer;
    }

    p {
        font-size: 24px;
    }
`;
