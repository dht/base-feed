import { CommentAuthorDriver } from './CommentAuthor.driver';
import Chance from 'chance';

const chance = new Chance();

describe('CommentAuthor', () => {
    let driver: CommentAuthorDriver;

    beforeAll(() => {
        driver = new CommentAuthorDriver();
    });

    it('should render button', () => {
        const label = chance.word();

        const element = driver.given
            .props({
                title: label,
            })
            .when.rendered();

        const wrapperClassName = element.get.wrapperClassName();
        const innerText = element.get.label();

        expect(wrapperClassName).toContain('CommentAuthor-wrapper');
        expect(innerText).toBe(label);
    });

    it('should click button', () => {
        const callback = jest.fn();

        driver.given
            .props({
                onClick: callback,
            })
            .when.rendered()
            .when.clicked();

        expect(callback).toHaveBeenCalledTimes(1);
    });
});

describe('CommentAuthor snapshots', () => {
    let driver: CommentAuthorDriver;

    beforeAll(() => {
        driver = new CommentAuthorDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
