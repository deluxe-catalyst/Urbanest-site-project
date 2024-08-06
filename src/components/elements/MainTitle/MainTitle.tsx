import classes from "./MainTitle.module.css";

interface Props {
    children: string;
}

export default function MainTitle({children} : Props) {
    return <h2 className={classes['title']}>{children}</h2>
}