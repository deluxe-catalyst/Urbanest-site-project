import classes from './ParagraphTitle.module.css';

interface Props {
    children: React.ReactNode;
}

export default function ParagraphTitle(props : Props) {
    return <h3 className={classes.title}>{props.children}</h3>;
}