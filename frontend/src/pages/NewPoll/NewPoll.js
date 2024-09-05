import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleAddQuestion } from '../../actions/questionAction';

function NewPoll(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [error, setError] = useState({ option1: false, option2: false });

    const handleSubmit = (e) => {
        let hasError = false;

        if (!option1) {
            setError(prevState => ({ ...prevState, option1: true }));
            hasError = true;
        } else {
            setError(prevState => ({ ...prevState, option1: false }));
        }

        if (!option2) {
            setError(prevState => ({ ...prevState, option2: true }));
            hasError = true;
        } else {
            setError(prevState => ({ ...prevState, option2: false }));
        }

        if (!hasError) {
            e.preventDefault();
            dispatch(handleAddQuestion(option1, option2));
            navigate("/");
        }
    };

    return (
        <div className='flex flex-col items-center justify-center gap-6 align-middle'>
            <div className='flex flex-col items-center justify-center align-middle'>
                <div className='text-5xl text-black'>Would you rather</div>
                <p className='text-2xl opacity-65'>Create your own Poll</p>
            </div>

            <div className='flex flex-col items-center w-full gap-10'>
                <div className='flex flex-col items-center justify-center w-full'>
                    <div className='flex flex-col min-w-[50%] max-w-[50%]'>
                        <span className='text-xl text-gray-900'>First Option</span>
                        <Input
                            type='text'
                            placeholder='Option 1'
                            value={option1}
                            onChange={(e) => setOption1(e.target.value)}
                            error={error.option1 && (
                                <span className='text-sm text-red-500'>First option is required</span>
                            )}
                        />

                    </div>
                    <div className='flex flex-col min-w-[50%] max-w-[50%]'>
                        <span className='text-xl text-gray-900'>Second Option</span>
                        <Input
                            type='text'
                            placeholder='Option 2'
                            value={option2}
                            onChange={(e) => setOption2(e.target.value)}
                            error={error.option2 && (
                                <span className='text-sm text-red-500'>Second option is required</span>
                            )}
                        />
                    </div>
                </div>

                <Button
                    type='secondary'
                    disabled={!option1 || !option2}
                    onClick={handleSubmit}
                    className='w-[220px]'
                    size='large'
                >
                    Create New Poll
                </Button>
            </div>
        </div>
    );
}

export default NewPoll;
