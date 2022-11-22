import eventService from "./event-service";

const dataSharer = {
    visiblePage: 'home',
    events: {
        setVisiblePage: 'setVisiblePage',
        onTextPage1: 'onTextPage1',
        onTextPage2: 'onTextPage2'
    },
    navTo: navigateTo,
    textPage1: '',
    textPage2: ''
};

function navigateTo(page: string) {
    dataSharer.visiblePage = page;
    eventService.execCallback(dataSharer.events.setVisiblePage);
}

export default dataSharer;
