"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_testing_library_1 = require("react-native-testing-library");
require("jest-styled-components");
const helpers_1 = require("../../../utils/tests/helpers");
const wording_1 = require("../../../utils/wording");
const About_1 = require("../About");
describe('[Page] About', () => {
    const props = helpers_1.getPropsWithNavigation();
    it('should navigate to home page on subscribe button press', () => {
        // SETUP
        const page = helpers_1.renderPage(react_1.default.createElement(About_1.About, Object.assign({}, props)));
        // GIVEN
        const NavigateSubscribeButton = page.getByText(wording_1.wording.subscribe);
        // WHEN
        react_native_testing_library_1.fireEvent.press(NavigateSubscribeButton);
        // THEN
        expect(props.navigation.navigate).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL1Rlc3RFeGFtcGxlcy9zcmMvcGFnZXMvQWJvdXQvX190ZXN0c19fL0Fib3V0LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLCtFQUF5RDtBQUN6RCxrQ0FBZ0M7QUFFaEMsMERBQWtGO0FBQ2xGLG9EQUFpRDtBQUNqRCxvQ0FBaUM7QUFFakMsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFDNUIsTUFBTSxLQUFLLEdBQUcsZ0NBQXNCLEVBQUUsQ0FBQztJQUV2QyxFQUFFLENBQUMsd0RBQXdELEVBQUUsR0FBRyxFQUFFO1FBQ2hFLFFBQVE7UUFDUixNQUFNLElBQUksR0FBRyxvQkFBVSxDQUFDLDhCQUFDLGFBQUssb0JBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUM5QyxRQUFRO1FBQ1IsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEUsT0FBTztRQUNQLHdDQUFTLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDekMsT0FBTztRQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL1Rlc3RFeGFtcGxlcy9zcmMvcGFnZXMvQWJvdXQvX190ZXN0c19fL0Fib3V0LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUtdGVzdGluZy1saWJyYXJ5JztcbmltcG9ydCAnamVzdC1zdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHJlbmRlclBhZ2UsIGdldFByb3BzV2l0aE5hdmlnYXRpb24gfSBmcm9tICcuLi8uLi8uLi91dGlscy90ZXN0cy9oZWxwZXJzJztcbmltcG9ydCB7IHdvcmRpbmcgfSBmcm9tICcuLi8uLi8uLi91dGlscy93b3JkaW5nJztcbmltcG9ydCB7IEFib3V0IH0gZnJvbSAnLi4vQWJvdXQnO1xuXG5kZXNjcmliZSgnW1BhZ2VdIEFib3V0JywgKCkgPT4ge1xuICBjb25zdCBwcm9wcyA9IGdldFByb3BzV2l0aE5hdmlnYXRpb24oKTtcblxuICBpdCgnc2hvdWxkIG5hdmlnYXRlIHRvIGhvbWUgcGFnZSBvbiBzdWJzY3JpYmUgYnV0dG9uIHByZXNzJywgKCkgPT4ge1xuICAgIC8vIFNFVFVQXG4gICAgY29uc3QgcGFnZSA9IHJlbmRlclBhZ2UoPEFib3V0IHsuLi5wcm9wc30gLz4pO1xuICAgIC8vIEdJVkVOXG4gICAgY29uc3QgTmF2aWdhdGVTdWJzY3JpYmVCdXR0b24gPSBwYWdlLmdldEJ5VGV4dCh3b3JkaW5nLnN1YnNjcmliZSk7XG4gICAgLy8gV0hFTlxuICAgIGZpcmVFdmVudC5wcmVzcyhOYXZpZ2F0ZVN1YnNjcmliZUJ1dHRvbik7XG4gICAgLy8gVEhFTlxuICAgIGV4cGVjdChwcm9wcy5uYXZpZ2F0aW9uLm5hdmlnYXRlKS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=