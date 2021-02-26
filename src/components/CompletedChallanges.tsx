import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import stules from '../styles/components/CompletedChallanges.module.css';

export function CompletedChallanges() {
    const { challangesCompleted } = useContext(ChallangesContext);
    
    return (
        <div className={stules.completedChallangesContainer}>
            <span>Desafios completos</span>
            <span>{challangesCompleted}</span>
        </div>
    )
}