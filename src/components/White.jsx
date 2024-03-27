import React, { useState } from 'react';
import Txt from './Txt';

const White = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='flex justify-center items-center text-center w-[100vw] h-[100vh]'>
            <div className='w-[327px] h-[535px] bg-white rounded-3xl mt-[110px] lg:w-[920px] lg:h-[509px] lg:mt-[-50px]'>
                <img className='mt-[-100px] lg:hidden' src="/assets/back1.svg" alt="" />
                <img className='hidden lg:block' src="/assets/back2.svg" alt="" />
                <div className='lg:ml-[400px] lg:mt-[-350px]'>
                    <h1 className='font-bold text-3xl  mt-[25px] lg:ml-[-20px]'>FAQ</h1>

                    <Txt
                        h1="How many team members can I invite?"
                        p="No more than 2GB. All files in your account must fit your allotted storage space."
                        number={1}
                        setShow={setShow}
                        show={show}
                        img="/assets/da.svg"
                    />

                    
                <Txt
                    h1="What is the maximum file upload size?"
                    p="No more than 2GB. All files in your account must fit your allotted storage space."
                    number={2}
                    setShow={setShow}
                    show={show}
                    img="/assets/da.svg"
                />

                <Txt
                    h1="What is the maximum file upload size?"
                    p="No more than 2GB. All files in your account must fit your allotted storage space."
                    number={3}
                    setShow={setShow}
                    show={show}
                    img="/assets/da.svg"
                />

                <Txt
                    h1="What is the maximum file upload size?"
                    p="No more than 2GB. All files in your account must fit your allotted storage space."
                    number={4}
                    setShow={setShow}
                    show={show}
                    img="/assets/da.svg"
                />

                <Txt
                    h1="What is the maximum file upload size?"
                    p="No more than 2GB. All files in your account must fit your allotted storage space."
                    number={5}
                    setShow={setShow}
                    show={show}
                    img="/assets/da.svg"
                />
                </div>
            </div>
        </div>
    );
};

export default White;
