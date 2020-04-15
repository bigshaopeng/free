import * as _ from '../lodash';

const aa: string = _.join(['Hello', 'webpack'], ' ');
document.body.innerHTML = `${aa}`