import { IUniversity } from "../../pages";

import './UniversitiesContainer.css';


interface IUniversitiesContainerProps {
    name: string;
    country: string;
    isStart: boolean;
    universities: IUniversity[];
}

export function UniversitiesContainer({ name, country, isStart, universities } : IUniversitiesContainerProps) {
    const descriptionClasses = `universities-description start-${isStart}`;

    return (
        <div className='universities-container'>
            <div className={descriptionClasses}>
                {!isStart && universities.length ?
                    `There are ${universities.length} universities in ${country ? country : 'the world'} ${name ? `that contains "${name}"` : ''}` :
                    `There are no universities with these parameters`   
                }
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