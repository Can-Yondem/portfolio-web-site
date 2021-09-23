import React from 'react'
import { useLoading, Circles } from '@agney/react-loading';

const Loading = () => {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Circles width="50" />,
    });
    return (
        <section {...containerProps} className="flex justify-center items-center h-full">
            {indicatorEl}
        </section>
    )
}

export default Loading
