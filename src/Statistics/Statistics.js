import s from "./Statistics.module.css";
import colors from "../colors.json";

function Statistics(props) {
    const randomColor = (colors) => {
        return "#" + colors[(Math.floor(Math.random() * colors.length))];
    };
    return (
        <section className={s.statistics}>
            {props.title && <h2 className={s.title}>{props.title}</h2>}

            <ul className={s.statList}>
                {props.stats.map((stat) => 
                <li className={s.item} 
                key={stat.id}
                style={{backgroundColor: randomColor(colors)}}
                >
                <span className={s.label}>{stat.label}</span>
                <span className={s.percentage}>{stat.percentage}%</span>
                </li>)}
            </ul>
        </section>
    )
}

export default Statistics;