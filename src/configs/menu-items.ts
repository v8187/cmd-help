import dataTypes from './data-types';

const dataTypesSrl: any = [];

dataTypes.map(dTypes => {
    dataTypesSrl.push(...dTypes.dataTypes);
});

dataTypesSrl.sort((a, b) => {
    return a.label > b.label ? 1 : a.label < b.label ? -1 : 0;
});

export default [
    { id: 'intro', label: 'Introduction' },
    { id: 'howTo', label: 'How To?' },
    { id: 'dataTypes', label: 'Data Types', children: dataTypesSrl }
];