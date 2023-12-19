import style from './tableSummary.module.css';
import { useState, useRef, useEffect } from "react";
import debounce from "lodash.debounce";
import ButtonScroll from './ButtonScroll';
import leftTable from '../../images/leftTable.svg';
import rightTable from '../../images/rightTable.svg';


function TableSummary() {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const listRef = useRef(null);

    const checkForScrollPosition = () => {
        const { current } = listRef;
        if (current) {
        const { scrollLeft, scrollWidth, clientWidth } = current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
        }
    };

    const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

    const scrollContainerBy = (distance) =>
        listRef.current?.scrollBy({ left: distance, behavior: "smooth" });

    useEffect(() => {
        const { current } = listRef;
        checkForScrollPosition();
        current?.addEventListener("scroll", debounceCheckForScrollPosition);

        return () => {
        current?.removeEventListener("scroll", debounceCheckForScrollPosition);
        debounceCheckForScrollPosition.cancel();
        };
    }, []);

	return (
        <div className={style.containerTable}>
            <ButtonScroll onClick={() => scrollContainerBy(-1021)} disabled={!canScrollLeft} images={leftTable}/>
            <div className={style.tableSummary}>
            <div className={style.headerSummary + " " + style.table + " " + style.tableHeader}>
                <p className={style.pharagraphTableHeader}>Период</p>
                <p className={style.pharagraphTableHeader}>Всего</p>
                <p className={style.pharagraphTableHeader}>Риски</p>
            </div>
            <ul className={style.scrollTable} ref={listRef}>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>10.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>10.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>10.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>10.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>10.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>10.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>15.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>16.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>17.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>18.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>19.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>15.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>16.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>17.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>18.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>19.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>15.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>16.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>17.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>18.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>19.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>15.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>16.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>17.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>18.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>19.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>15.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>16.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>17.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>18.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
                <li className={style.tableContent}>
                    <div className={style.tableDiv}>
                        <p className={style.pharagraphTable}>19.09.2021</p>
                        <p className={style.pharagraphTable}>5</p>
                        <p className={style.pharagraphTable}>0</p>
                    </div>
                </li>
            </ul>
        </div>
        <ButtonScroll onClick={() => scrollContainerBy(1021)} disabled={!canScrollRight} images={rightTable}/>
    </div>
	  
	);
  }

  export default TableSummary;