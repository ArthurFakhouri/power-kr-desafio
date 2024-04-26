import { MouseEvent, useEffect, useRef, useState } from "react";
import { FilterContainer, FilterOptions, FilterSelected } from "./styles";
import { FaChevronDown } from "react-icons/fa";

type Options = {
    value: string
    label: string
}

interface SelectProps {
    selectedIndex: number
    setSelectedIndex: (index: number) => void
    options: Options[]
    emptyValue?: boolean
    isAbsolute?: boolean
    disabled?: boolean
}

export function Select({
    selectedIndex,
    setSelectedIndex,
    options,
    emptyValue = false,
    isAbsolute = true,
    disabled = false
}: SelectProps) {

    const [isSelectingFilter, setIsSelectingFilter] = useState(false);
    const [width, setWidth] = useState(0)

    const listRef = useRef<HTMLUListElement>(null);

    if (emptyValue) {
        options = [{ value: '', label: '' }, ...options]
    }

    if (options.some((value) => Object.keys(value).length < 2))
        throw new Error('Object from Array must have at least two keys.')

    if (!emptyValue && options.length === 0)
        throw new Error('Must have at least one index in options array when emptyValue is set to false.')

    options = options.map(option => {
        return { value: Object.values(option)[0], label: Object.values(option)[1] }
    })

    useEffect(() => {

        const handleClickPage = () => {
            setIsSelectingFilter(false);
        }

        window.addEventListener('click', handleClickPage);

        return () => window.removeEventListener('click', handleClickPage);
    }, [])

    useEffect(() => {
        if (listRef.current && width <= 32) {
            const list = Array.from(listRef.current.children);
            const wishedWidth = (list.reduce((prvValue, curValue) => {
                if (curValue.children[0] instanceof HTMLElement) {
                    if (curValue.children[0].offsetWidth > prvValue)
                        return curValue.children[0].offsetWidth
                }
                return prvValue;
            }, 0) + 200)
            setWidth(wishedWidth)
        }
    }, [options, width])

    function handleToggleOption(index: number) {
        setSelectedIndex(index)
        setIsSelectingFilter(false);
    }

    function handleToggleOptionsVisibility(event: MouseEvent<HTMLElement>) {
        event.stopPropagation();
        setIsSelectingFilter(!isSelectingFilter);
    }

    return (
        <FilterContainer disabled={disabled}>
            <FilterSelected style={{ width: `${width}px` }} active={String(isSelectingFilter)}
                onClick={(e) => handleToggleOptionsVisibility(e)}>
                <span>{options[emptyValue ? selectedIndex + 1 : selectedIndex].label}</span>
                <FaChevronDown />
            </FilterSelected>
            <FilterOptions ref={listRef} style={{ width: `${width}px` }}
                active={String(isSelectingFilter)} onClick={(e) => e.stopPropagation()}
                isabsolute={String(isAbsolute)}>
                {options.map((option, index) =>
                    <li key={index} onClick={() => handleToggleOption(emptyValue ? index - 1 : index)}>
                        <span>{option.label}</span>
                    </li>
                )}
            </FilterOptions>
        </FilterContainer>
    )
}