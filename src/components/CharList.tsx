import {useSearchCharsQuery} from "../store/reducers/ramApi";
import {Char} from "./Char";
import {useEffect} from "react";
import {IChar} from "../models/models";
import {useActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/selector";
import {Filter} from "./Filter";

export const CharList = () => {
    const {data} = useSearchCharsQuery(10)
    let currentChars: IChar[] | null = useAppSelector(state => state.ram)
    const {addChars} = useActions()
    const changeToAlive = () => {
        addChars(data?.filter(char => char.status === 'Alive'))
    }
    const changeToHuman = () => {
        addChars(data?.filter(char => char.species === 'Human'))
    }
    useEffect(() => {
        addChars(data)
    }, [data])
    return (
        <div className='flex justify-around flex-wrap max-w-5xl'>
            <button onClick={changeToAlive}>Alive</button>
            <button onClick={changeToHuman}>Human</button>
            <div>
                <Filter/>
            </div>
            {currentChars && (currentChars as IChar[]).map(char => <Char char={char} key={char.id}/>)}
        </div>
    )
}

