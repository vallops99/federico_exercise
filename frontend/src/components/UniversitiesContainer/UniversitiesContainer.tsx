import { IUniversity } from "../../pages";

import './UniversitiesContainer.css';


interface IUniversitiesContainerProps {
    universities: IUniversity[];
    country: string
}

export function UniversitiesContainer({ universities, country } : IUniversitiesContainerProps) {
    const descriptionClasses = `universities-description quantity-${universities.length}`;

    return (
        <div className='universities-container'>
            <div className={descriptionClasses}>
                There are {universities.length} universities in {country ? country : 'the world'}
            </div>
            <div className='universities-list'>
                {universities.map((uni, index) => {
                    return (
                        <div className="university-item" key={index}>
                            <a href={uni.web_pages[0]}>{uni.name}</a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}