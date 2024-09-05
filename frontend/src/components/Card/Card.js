import React from 'react';
import Avatar from '../Avatar/Avatar';
import { formatDateTime } from '../../utils';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { PATH } from '../../App';

function Card({ question, author }) {
    return (
        <div className='border-[1px] min-w-[200px] max-w-[200px] p-2'>
            <div className="flex flex-col items-center justify-center gap-3">
                <div className='flex items-center gap-3'>
                    <Avatar alt={author.id} image={author.avatarURL} />
                    <p className="font-medium text-blue-600">{author.name}</p>
                </div>

                <div>{formatDateTime(new Date(question.timestamp))}</div>
                <Link to={`${PATH.QUESTION_URL}/${question.id}`}>
                    <Button type='primary' className='w-full'>Show</Button>
                </Link>
            </div>
        </div>
    );
}

export default Card;
