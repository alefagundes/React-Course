import ChangeCounter from '../components/ChangeCounter'
import { useCounterContext } from '../hooks/useCounterContext'

import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Product = () => {
    const { counter } = useCounterContext()

    // 5 context mais complexo
    const { color } = useTitleColorContext()

    return (
        <div>
            <h1 style={{ color: color }}>Product</h1>
            <p>Valor do conter produto: {counter}</p>
            <ChangeCounter />
        </div>
    )
}

export default Product
