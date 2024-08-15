import classes from './Paragraph.module.css';

interface Props {
    children : React.ReactNode,
}
export default function Paragraph(props : Props) {
    return (
        <p className={classes.paragraph}>
            {props.children}
        </p>
    )
}

export function ParagraphItalic(props : Props) {
    return (
        <p className={classes['paragraph--italy']}>
            {props.children}
        </p>
    )
}