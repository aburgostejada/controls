import React, { useState } from 'react';
import SegmentedControl from './components/segmentedControl';
import './App.scss';

const App = (props) => {
    const [values, setValues] = useState({
        first: null,
        second: null,
        third: 'client',
        forth: 'female'
    });

    const option = (value, label) => {return { value, label } };
    const getSelected = (field) => <span className="selection">
        {field ? `selected -> ${field}` : null}
    </span>;

    return (
        <div className="App">
            <header className="App-header">
                <h1>Segmented Control</h1>
            </header>
            <article>
                <h2>With two options: {getSelected(values.first)}</h2>
                <SegmentedControl
                    selected={values.first}
                    label={'Paid by'}
                    onSelected={(value) => setValues({
                        ...values,
                        first: value
                    })}
                    options={[
                        option('client', 'Client'),
                        option('valassis_digital', 'Valassis Digital')
                    ]}
                />
            </article>
            <article>
                <h2>With three options: {getSelected(values.second)}</h2>
                <SegmentedControl
                    selected={values.second}
                    label={'Gender'}
                    onSelected={(value) => setValues({
                        ...values,
                        second: value
                    })}
                    options={[
                        option('all', 'All'),
                        option('female', 'Female'),
                        option('male', 'Male'),
                    ]}
                />
            </article>
            <article>
                <h2>With two options and one preselected: {getSelected(values.third)}</h2>
                <SegmentedControl
                    label='Paid by'
                    selected={values.third}
                    onSelected={(value) => setValues({
                        ...values,
                        third: value
                    })}
                    options={[
                        option('client', 'Client'),
                        option('valassis_digital', 'Valassis Digital')
                    ]}
                />
            </article>
            <article>
                <h2>With three options and one preselected: {getSelected(values.forth)}</h2>
                <SegmentedControl
                    label='Gender'
                    onSelected={(value) => setValues({
                        ...values,
                        forth: value
                    })}
                    selected={values.forth}
                    options={[
                        option('all', 'All'),
                        option('female', 'Female'),
                        option('male', 'Male'),
                    ]}
                />
            </article>

        </div>
    );
};

export default App;
