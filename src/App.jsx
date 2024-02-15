import { Fragment, useState, useEffect } from 'react';

function shuffle(arr) {
    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    console.log('shuffling', arr);
}

function handleClick(current, clicked, setClicked, setCards) {
    if (clicked.includes(current)) setClicked([]);
    else setClicked([...clicked, current]);

    console.log('clicked', clicked);

    shuffle(names);
    setCards(names);
}

const names = [
    'bird',
    'camel',
    'fish',
    'fox',
    'mouse',
    'seal',
    'origami',
    'aries',
    'cat',
    'crab',
    'dinosaur',
    'dog',
    'dragon',
    'elephant',
    'frog',
    'penguin',
    'pig',
    'pinwheel',
    'rabbit',
    'rooster',
    'ship',
    'squirrel',
    'unicorn',
    'bat',
];

export default function App() {
    const [cards, setCards] = useState(names);
    const [clicked, setClicked] = useState([]);
    const [score, setScore] = useState(clicked.length);

    useEffect(() => {
        setScore(clicked.length);
    }, [cards, clicked]);

    return (
        <Fragment>
            <p className='text-white text-2xl font-black mb-10'>
                Score: <span>{score}</span>
            </p>
            <section className='board grid grid-cols-4 grid-rows-6 content-end gap-5'>
                {cards.map((card) => (
                    <button
                        className={card}
                        key={card}
                        onClick={(e) =>
                            handleClick(e.target.className, clicked, setClicked, setCards)
                        }
                    ></button>
                ))}
            </section>
        </Fragment>
    );
}
