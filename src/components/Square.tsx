interface Values {
    value: 'X' | 'O' | null;
    onSquareClick: any;
}

export default function Board(values: Values) {

    return <button className="square border-2 w-8 h-8" onClick={values.onSquareClick}>
        {values.value}
        </button>;
}