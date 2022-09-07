import RelativeTime from '@yaireo/relative-time'

export function timeAgo(dateStr) {
    const relativeTime = new RelativeTime();

    return relativeTime.from(new Date(dateStr))
}