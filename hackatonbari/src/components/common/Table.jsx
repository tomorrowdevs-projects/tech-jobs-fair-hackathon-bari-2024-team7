/* import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../App.css';

export default function BasicTable({ leaderBoardData }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                {leaderBoardData.length > 0 ? (
                    <TableHead>
                        <TableRow>
                            <TableCell>Player Name</TableCell>
                            <TableCell>Difficulty</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Final Score</TableCell>
                        </TableRow>
                    </TableHead>
                ) : (
                    <></>
                )}
                {leaderBoardData.length > 0 ? (
                    leaderBoardData.map((person) => {
                        return (
                            <TableBody>
                                <TableRow
                                    key={person.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {person.playerName}
                                    </TableCell>
                                    <TableCell className="table-cell">{person.difficulty}</TableCell>
                                    <TableCell>{person.category}</TableCell>
                                    <TableCell>{person.finalScore}</TableCell>
                                </TableRow>

                            </TableBody>
                        )
                    })
                ) : (
                    <div className='no-data'>
                        <p>No Data to Show</p>
                    </div>
                )}
            </Table>
        </TableContainer>
    );
} */

/* codice parte 2 carino */

/* import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../App.css';

export default function BasicTable({ leaderBoardData }) {
    return (
        <TableContainer component={Paper} className="table-container">
            <Table aria-label="simple table">
                {leaderBoardData.length > 0 ? (
                    <TableHead>
                        <TableRow>
                            <TableCell>Player</TableCell>
                            <TableCell>Difficulty</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Score</TableCell>
                        </TableRow>
                    </TableHead>
                ) : (
                    <></>
                )}
                <TableBody>
                    {leaderBoardData.length > 0 ? (
                        leaderBoardData.map((person) => (
                            <TableRow key={person.id}>
                                <TableCell component="th" scope="row">
                                    {person.playerName}
                                </TableCell>
                                <TableCell className="table-cell">{person.difficulty}</TableCell>
                                <TableCell>{person.category}</TableCell>
                                <TableCell>{person.finalScore}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4}>
                                <div className='no-data'>
                                    <p>No Data to Show</p>
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
} */


/* codice parte 3 prova */

/* import React, { useState, useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import '../../App.css';

export default function BasicTable({ leaderBoardData }) {
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    };

    const uniqueCategories = useMemo(() => {
        const categories = leaderBoardData.map(person => person.category);
        return [...new Set(categories)];
    }, [leaderBoardData]);

    const uniqueDifficulties = useMemo(() => {
        const difficulties = leaderBoardData.map(person => person.difficulty);
        return [...new Set(difficulties)];
    }, [leaderBoardData]);

    const filteredData = leaderBoardData.filter((person) => {
        const categoryMatch = category === '' || person.category === category;
        const difficultyMatch = difficulty === '' || person.difficulty === difficulty;
        return categoryMatch && difficultyMatch;
    });

    return (
        <div>
            <div className="filter-container">
                <FormControl variant="outlined" className="filter-select">
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Category"
                    >
                        <MenuItem value="">All</MenuItem>
                        {uniqueCategories.map((cat, index) => (
                            <MenuItem key={index} value={cat}>{cat}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className="filter-select">
                    <InputLabel id="difficulty-label">Difficulty</InputLabel>
                    <Select
                        labelId="difficulty-label"
                        value={difficulty}
                        onChange={handleDifficultyChange}
                        label="Difficulty"
                    >
                        <MenuItem value="">All</MenuItem>
                        {uniqueDifficulties.map((diff, index) => (
                            <MenuItem key={index} value={diff}>{diff}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <TableContainer component={Paper} className="table-container">
                <Table aria-label="simple table">
                    {filteredData.length > 0 ? (
                        <TableHead>
                            <TableRow>
                                <TableCell>Player Name</TableCell>
                                <TableCell>Final Score</TableCell>
                            </TableRow>
                        </TableHead>
                    ) : null}
                    <TableBody>
                        {filteredData.length > 0 ? (
                            filteredData.map((person) => (
                                <TableRow key={person.id}>
                                    <TableCell component="th" scope="row">
                                        {person.playerName}
                                    </TableCell>
                                    <TableCell>{person.finalScore}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <div className='no-data'>
                                        <p>No Data to Show</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
} */


/* ultimo test */

import React, { useState, useEffect, useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import '../../App.css';

export default function BasicTable({ leaderBoardData }) {
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [showScroll, setShowScroll] = useState(false);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    };

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    const uniqueCategories = useMemo(() => {
        const categories = leaderBoardData.map(person => person.category);
        return [...new Set(categories)];
    }, [leaderBoardData]);

    const uniqueDifficulties = useMemo(() => {
        const difficulties = leaderBoardData.map(person => person.difficulty);
        return [...new Set(difficulties)];
    }, [leaderBoardData]);

    const filteredData = leaderBoardData.filter((person) => {
        const categoryMatch = category === '' || person.category === category;
        const difficultyMatch = difficulty === '' || person.difficulty === difficulty;
        return categoryMatch && difficultyMatch;
    });

    return (
        <div>
            <div className="filter-container">
                <FormControl variant="outlined" className="filter-select">
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Category"
                    >
                        <MenuItem value=""><em>All</em></MenuItem>
                        {uniqueCategories.map((cat, index) => (
                            <MenuItem key={index} value={cat}>{cat}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className="filter-select">
                    <InputLabel id="difficulty-label">Difficulty</InputLabel>
                    <Select
                        labelId="difficulty-label"
                        value={difficulty}
                        onChange={handleDifficultyChange}
                        label="Difficulty"
                    >
                        <MenuItem value=""><em>All</em></MenuItem>
                        {uniqueDifficulties.map((diff, index) => (
                            <MenuItem key={index} value={diff}>{diff}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <TableContainer component={Paper} className="table-container">
                <Table aria-label="simple table">
                    {filteredData.length > 0 ? (
                        <TableHead>
                            <TableRow>
                                <TableCell>Player Name</TableCell>
                                <TableCell>Final Score</TableCell>
                            </TableRow>
                        </TableHead>
                    ) : null}
                    <TableBody>
                        {filteredData.length > 0 ? (
                            filteredData.map((person) => (
                                <TableRow key={person.id}>
                                    <TableCell component="th" scope="row">
                                        {person.playerName}
                                    </TableCell>
                                    <TableCell>{person.finalScore}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <div className='no-data'>
                                        <p>No Data to Show</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="scroll-top" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
                <ArrowUpwardIcon />
            </div>
        </div>
    );
}

