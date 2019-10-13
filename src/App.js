import React, { useState } from 'react';
import SegmentedControl from './components/segmentedControl/segmentedControl';
import './App.scss';

const App = (props) => {
    const [values, setValues] = useState({
        first: null,
        second: null,
        third: 'client',
        forth: 'female'
    });

    const option = (value, label, description = '') => {
        return { value, label, description }
    };

    const getSelected = (field) => <span className="selection">
        {field ? `selected -> ${field}` : null}
    </span>;

    const onSelectedFactory = (field) => {
        return (value) => setValues({
            ...values,
            [field]: value
        });
    };

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
                    onSelected={onSelectedFactory("first")}
                    options={[
                        option('client', 'Client', 'This is a explanation about the option'),
                        option('valassis_digital', 'Valassis Digital', 'This is a explanation about the option')
                    ]}
                />
            </article>
            <article>
                <h2>With three options: {getSelected(values.second)}</h2>
                <SegmentedControl
                    selected={values.second}
                    label='Gender'
                    onSelected={onSelectedFactory("second")}
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
                    onSelected={onSelectedFactory("third")}
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
                    onSelected={onSelectedFactory("forth")}
                    selected={values.forth}
                    options={[
                        option('all', 'All'),
                        option('female', 'Female'),
                        option('male', 'Male')
                    ]}
                />
            </article>
        </div>
    );
};

export default App;
