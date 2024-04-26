import { api } from "../lib/axios";

type DepartmentMeta = {
    id: number
    title: string
    aes: number[]
}

type Employee = {
    id: number,
    name: string,
    department: string,
    image: string
    children: number[]
    metas: DepartmentMeta[]
    valueInPercentage: number
}

type Meta = {
    accumulated: number
    balance: number
    description: string
    expectedAvg: number,
    goal: number,
    performedAvg: number,
    situation: number
}

export type ChartData = {
    chart: Employee[]
    meta: Meta
}

function getAvailableIds(departmentEmployee: Employee, data: ChartData) {

    const ids = [departmentEmployee.id]
    const childStack = [...departmentEmployee.children]

    while(childStack.length !== 0) {
        const childNumber = childStack.pop()
        const child = data.chart.find(employee => employee.id === childNumber)
        
        if(!child) {
            throw new Error('Employee child not found')
        }
        
        ids.push(child.id)
        childStack.push(...child.children)
    }

    return ids
}

export async function getChartInfo(id: string) {
    const response = await api.get('../../data.json')

    const data = response.data as ChartData
    
    const departmentEmployee = data.chart.find(employee => employee.id === Number(id))

    if(!departmentEmployee) {
        throw new Error('Employee not found')
    }
    const ids = getAvailableIds(departmentEmployee, data)

    const departmentsChart = data.chart.filter(employee => ids.includes(employee.id))

    return {
        chart: departmentsChart,
        meta: data.meta
    }
}