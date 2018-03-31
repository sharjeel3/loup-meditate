import preact, {Component} from 'preact'
import styles from './ProgressBar.scss'
import classnames from 'classnames'
import { max, scaleLinear, select } from "d3"

const Icon = () => {
    return 'progress'
}

class ProgressBar extends Component {

    constructor(props){
        super(props)
        this.svgWidth = 130
        this.state = {
            baseHeight: 5,
            bars1: [4,3,6,8,7,6,7,8,9,10,8,6,3,4,6],
            bars2: [4,4,3,3,6,6,8,8,7,7,6,6,7,7,8,8,9,9,10,10,8,8,6,6,3,3,4,4,6,6],
            totalSteps: 30
        }
        this.onClickCB = this.props.progressCb
    }

    componentDidMount() {
        this.createBars()
    }

    onClickFn = (d3Data, index) => {
        let validStep = index%2 === 0 ? index : index - 1
        this.onClickCB({
            totalSteps: this.state.totalSteps,
            currentStep: validStep
        })
    }

    createBars() {
        const node = this.node

        select(node)
            .selectAll('rect')
            .data(this.state.bars2)
            .enter()
            .append('rect')

        select(node)
            .selectAll('rect')
            .style('fill', (d, i) => (i%2 === 0 ? '#50e3c2' : '#FFFFFF'))
            .attr('width', 4)
            .attr('height', d => d * this.state.baseHeight)
            .attr('rx', 3)
            .attr('ry', 3)
            .attr('y', d => (10-d) * 5 + "%")
            .attr('transform', (d, i) => ("translate(" + i * 4 + ", 0)"))
            .on('click', this.onClickFn)
            .attr('data-index', (d, i)=>i)

    }

    render() {
        const { children, ...props } = this.props
        const { className, ...restProps } = props
        const combinedProps = {
            className: classnames(styles.root, className),
            ...restProps
        }
        return <div {...combinedProps}>
            <svg className={styles.svg} ref={node => this.node = node}
                 width={this.svgWidth} height={60}>
            </svg>
        </div>
    }
}

export default ProgressBar
