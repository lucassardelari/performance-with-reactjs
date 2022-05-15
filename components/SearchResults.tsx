import { List, ListRowRenderer } from 'react-virtualized';
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number;
        title: string;
        priceFormatted: string;
    }>;
    onAddToWishlist: (id: number) => void;
}

export function SearchResults({ totalPrice, results, onAddToWishlist }: SearchResultsProps) {

    /*const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price;
        }, 0)
    }, [results])*/

    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div key={key} style={style} >
                <ProductItem product={results[index]} onAddToWishlist={onAddToWishlist} />
            </div>
        )
    }

    return (
        <div>
            <h2>{totalPrice}</h2>

            <List
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
            />

            {/*
                <Component totalPrice={totalPrice} /> // useMemo
            */}

            {/*
                results.map(product => {
                    return (
                        <ProductItem key={product.id} product={product} onAddToWishlist={onAddToWishlist} />
                    );
                })
            */}
        </div>
    )
}

/**
 * 1. Criar uma nova versao do component
 * 2. Comparar com a versao anterior
 * 3. Se houverem alteracoes, vai atualizar o que alterou
 */

/**
 * 1. Pure Functional Components
 * 2. Renders too often (Componentes que renderizam demais, tables)
 * 3. Re-renders with same props
 * 4. Medium to big size ()
 */

/**
 * useMemo / useCallback
 * 
 * useMemo
 * 1. Calculos pesados
 * 2. Igualdade referencial (quando a gente repassa aquela informação a um component filho)
 */