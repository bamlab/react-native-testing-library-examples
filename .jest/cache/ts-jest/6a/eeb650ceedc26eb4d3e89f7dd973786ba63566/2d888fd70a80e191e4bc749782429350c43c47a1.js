"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_toaster_1 = require("react-native-toaster");
const rex_tils_1 = require("@martin_hotell/rex-tils");
const types_1 = require("./types");
const TOASTER_DURATION = 3000;
exports.ToasterActions = {
    showErrorMessage: (message) => rex_tils_1.createAction(types_1.ToasterActionTypes.ADD_TOAST, {
        text: message,
        duration: TOASTER_DURATION,
        styles: {
            container: { ...react_native_toaster_1.ToastStyles.error.container, backgroundColor: 'red' },
            text: {
                ...react_native_toaster_1.ToastStyles.text,
                fontSize: 13,
                lineHeight: 16,
                color: '#fff',
            },
        },
    }),
    showSuccessMessage: (message) => rex_tils_1.createAction(types_1.ToasterActionTypes.ADD_TOAST, {
        text: message,
        duration: TOASTER_DURATION,
        styles: {
            container: {
                ...react_native_toaster_1.ToastStyles.error.container,
                backgroundColor: 'green',
            },
            text: {
                ...react_native_toaster_1.ToastStyles.text,
                fontSize: 13,
                lineHeight: 16,
                color: '#fff',
            },
        },
    }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL1Rlc3RFeGFtcGxlcy9zcmMvbW9kdWxlcy90b2FzdGVyL2FjdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQW1EO0FBQ25ELHNEQUFxRTtBQUNyRSxtQ0FBNkM7QUFFN0MsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFFakIsUUFBQSxjQUFjLEdBQUc7SUFDNUIsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUNwQyx1QkFBWSxDQUFDLDBCQUFrQixDQUFDLFNBQVMsRUFBRTtRQUN6QyxJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsTUFBTSxFQUFFO1lBQ04sU0FBUyxFQUFFLEVBQUUsR0FBRyxrQ0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRTtZQUNyRSxJQUFJLEVBQUU7Z0JBQ0osR0FBRyxrQ0FBVyxDQUFDLElBQUk7Z0JBQ25CLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFVBQVUsRUFBRSxFQUFFO2dCQUNkLEtBQUssRUFBRSxNQUFNO2FBQ2Q7U0FDRjtLQUNGLENBQUM7SUFDSixrQkFBa0IsRUFBRSxDQUFDLE9BQWUsRUFBRSxFQUFFLENBQ3RDLHVCQUFZLENBQUMsMEJBQWtCLENBQUMsU0FBUyxFQUFFO1FBQ3pDLElBQUksRUFBRSxPQUFPO1FBQ2IsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixNQUFNLEVBQUU7WUFDTixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxrQ0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTO2dCQUM5QixlQUFlLEVBQUUsT0FBTzthQUN6QjtZQUNELElBQUksRUFBRTtnQkFDSixHQUFHLGtDQUFXLENBQUMsSUFBSTtnQkFDbkIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsS0FBSyxFQUFFLE1BQU07YUFDZDtTQUNGO0tBQ0YsQ0FBQztDQUNMLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL1Rlc3RFeGFtcGxlcy9zcmMvbW9kdWxlcy90b2FzdGVyL2FjdGlvbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvYXN0U3R5bGVzIH0gZnJvbSAncmVhY3QtbmF0aXZlLXRvYXN0ZXInO1xuaW1wb3J0IHsgQWN0aW9uc1VuaW9uLCBjcmVhdGVBY3Rpb24gfSBmcm9tICdAbWFydGluX2hvdGVsbC9yZXgtdGlscyc7XG5pbXBvcnQgeyBUb2FzdGVyQWN0aW9uVHlwZXMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgVE9BU1RFUl9EVVJBVElPTiA9IDMwMDA7XG5cbmV4cG9ydCBjb25zdCBUb2FzdGVyQWN0aW9ucyA9IHtcbiAgc2hvd0Vycm9yTWVzc2FnZTogKG1lc3NhZ2U6IHN0cmluZykgPT5cbiAgICBjcmVhdGVBY3Rpb24oVG9hc3RlckFjdGlvblR5cGVzLkFERF9UT0FTVCwge1xuICAgICAgdGV4dDogbWVzc2FnZSxcbiAgICAgIGR1cmF0aW9uOiBUT0FTVEVSX0RVUkFUSU9OLFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIGNvbnRhaW5lcjogeyAuLi5Ub2FzdFN0eWxlcy5lcnJvci5jb250YWluZXIsIGJhY2tncm91bmRDb2xvcjogJ3JlZCcgfSxcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIC4uLlRvYXN0U3R5bGVzLnRleHQsXG4gICAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6IDE2LFxuICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBzaG93U3VjY2Vzc01lc3NhZ2U6IChtZXNzYWdlOiBzdHJpbmcpID0+XG4gICAgY3JlYXRlQWN0aW9uKFRvYXN0ZXJBY3Rpb25UeXBlcy5BRERfVE9BU1QsIHtcbiAgICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogVE9BU1RFUl9EVVJBVElPTixcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICAuLi5Ub2FzdFN0eWxlcy5lcnJvci5jb250YWluZXIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLFxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgLi4uVG9hc3RTdHlsZXMudGV4dCxcbiAgICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgICAgbGluZUhlaWdodDogMTYsXG4gICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG59O1xuXG5leHBvcnQgdHlwZSBUVG9hc3RlckFjdGlvbk9iamVjdFR5cGVzID0gQWN0aW9uc1VuaW9uPHR5cGVvZiBUb2FzdGVyQWN0aW9ucz47XG4iXSwidmVyc2lvbiI6M30=