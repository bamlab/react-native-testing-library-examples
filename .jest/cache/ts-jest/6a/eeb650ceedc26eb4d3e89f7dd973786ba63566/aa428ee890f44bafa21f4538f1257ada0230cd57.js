"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("../lib/styled-components"));
const react_native_1 = require("react-native");
const theme_1 = require("../utils/theme");
exports.Container = styled_components_1.default(react_native_1.View) `
  flex: 1;
  padding-horizontal: 20;
  align-items: center;
  background-color: ${theme_1.theme.colors.primaryDark};
  justify-content: center;
`;
exports.Card = styled_components_1.default.View `
  background-color: white;
  border-radius: 6px;
  padding-horizontal: 16;
  padding-vertical: 8;
  width: 100%;
  align-items: center;
`;
exports.Title = styled_components_1.default.Text `
  font-size: 18;
  margin-vertical: 20px;
`;
exports.Input = styled_components_1.default.TextInput `
  align-self: flex-start;
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL1Rlc3RFeGFtcGxlcy9zcmMvY29tcG9uZW50cy9TdHlsZWRDb21wb25lbnRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlGQUE4QztBQUM5QywrQ0FBb0M7QUFDcEMsMENBQXVDO0FBRTFCLFFBQUEsU0FBUyxHQUFHLDJCQUFNLENBQUMsbUJBQUksQ0FBQyxDQUFBOzs7O3NCQUlmLGFBQUssQ0FBQyxNQUFNLENBQUMsV0FBVzs7Q0FFN0MsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHLDJCQUFNLENBQUMsSUFBSSxDQUFBOzs7Ozs7O0NBTzlCLENBQUM7QUFFVyxRQUFBLEtBQUssR0FBRywyQkFBTSxDQUFDLElBQUksQ0FBQTs7O0NBRy9CLENBQUM7QUFFVyxRQUFBLEtBQUssR0FBRywyQkFBTSxDQUFDLFNBQVMsQ0FBQTs7Q0FFcEMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvbWF0dGhpZXUvcHJvamVjdHMvVGVzdEV4YW1wbGVzL3NyYy9jb21wb25lbnRzL1N0eWxlZENvbXBvbmVudHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnLi4vbGliL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi91dGlscy90aGVtZSc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoVmlldylgXG4gIGZsZXg6IDE7XG4gIHBhZGRpbmctaG9yaXpvbnRhbDogMjA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnlEYXJrfTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgQ2FyZCA9IHN0eWxlZC5WaWV3YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nLWhvcml6b250YWw6IDE2O1xuICBwYWRkaW5nLXZlcnRpY2FsOiA4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5UZXh0YFxuICBmb250LXNpemU6IDE4O1xuICBtYXJnaW4tdmVydGljYWw6IDIwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuVGV4dElucHV0YFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuYDtcbiJdLCJ2ZXJzaW9uIjozfQ==