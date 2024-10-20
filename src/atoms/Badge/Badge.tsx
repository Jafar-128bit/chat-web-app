import './badge.css';

interface Prop {
    badgeValue: string;
}

const Badge = ({badgeValue}: Prop) => {
    return <div className="badge">
        {badgeValue}
    </div>;
}

export default Badge;