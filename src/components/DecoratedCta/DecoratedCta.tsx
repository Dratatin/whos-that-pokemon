import { Link } from 'react-router-dom';
import './decoratedCta.scss';

type DecoratedCta = {
    label: string;
    link?: {
        path: string;
    }
}

function DecoratedCta ({label , link} : DecoratedCta) {
    const className = "button";

    const Content = () => (
        <>
            <div className="button__decoration button__decoration--before"></div>
            <span className="button__content">{label}</span>
            <div className="button__decoration button__decoration--after"></div>
        </>
    )

    return (
        link ? 
            <Link
                to={link.path}
                className={className}
            >
                <Content />
            </Link>
            :
            <button 
                className={className}
            >
                <Content />
            </button>
        )
}

export default DecoratedCta