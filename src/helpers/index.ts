import { NAV_ITEMS } from "@constants/navItems";
import { PageTransitionAnimation } from "@lib/animation";

export function getPrevAndNextPaths(currentPath: string): {
    prevPath: string;
    nextPath: string;
} {
    const data = {
        prevPath: "",
        nextPath: "",
    };
    const currentIndex = NAV_ITEMS.findIndex(
        ({ path }) => path === currentPath,
    );

    if (currentIndex === -1) {
        return data;
    }
    const prevPathIndex = currentIndex - 1;
    const nextPathIndex = currentIndex + 1;
    if (prevPathIndex >= 0) {
        data.prevPath = NAV_ITEMS[prevPathIndex].path;
    }
    if (nextPathIndex >= 0 && nextPathIndex < NAV_ITEMS.length) {
        data.nextPath = NAV_ITEMS[nextPathIndex].path;
    }
    return data;
}

interface GetEnterOrExitDirections {
    isEntering: boolean;
    incomingPath: string;
    lastPath: string;
    lastPrevPath: string;
    lastNextPath: string;
}

export function getEnterOrExitDirections({
    isEntering,
    incomingPath,
    lastPath,
    lastPrevPath,
    lastNextPath,
}: GetEnterOrExitDirections): Record<string, boolean> {
    const directions = {
        isEnteringFromLeft: false,
        isEnteringFromRight: false,
        isExitingFromLeft: false,
        isExitingFromRight: false,
    };
    if (isEntering) {
        if (lastPrevPath === lastPath) {
            directions.isEnteringFromRight = true;
        } else if (lastNextPath === lastPath) {
            directions.isEnteringFromLeft = true;
        }
    } else {
        if (lastPrevPath === incomingPath) {
            directions.isExitingFromRight = true;
        } else if (lastNextPath === incomingPath) {
            directions.isExitingFromLeft = true;
        }
    }
    return directions;
}

interface GetAnimationVariantsProps {
    isEnteringFromLeft: boolean;
    isEnteringFromRight: boolean;
    isExitingFromLeft: boolean;
    isExitingFromRight: boolean;
}

export function getAnimationVariants({
    isEnteringFromLeft,
    isEnteringFromRight,
    isExitingFromLeft,
    isExitingFromRight,
}: GetAnimationVariantsProps): Partial<
    typeof PageTransitionAnimation.variants
> {
    const variants = {
        animate: PageTransitionAnimation.variants.animate,
        exit: PageTransitionAnimation.variants.exitLeft,
        enter: PageTransitionAnimation.variants.enterLeft,
    };
    if (isEnteringFromLeft) {
        variants.enter = PageTransitionAnimation.variants.enterLeft;
    } else if (isEnteringFromRight) {
        variants.enter = PageTransitionAnimation.variants.enterRight;
    }

    if (isExitingFromLeft) {
        variants.exit = PageTransitionAnimation.variants.exitLeft;
    } else if (isExitingFromRight) {
        variants.exit = PageTransitionAnimation.variants.exitRight;
    }

    return variants;
}
