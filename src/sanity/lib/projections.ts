export const PHOTO_ALBUM_PROJECTION = `{
    ...,
    genre->,
    images[] {
        ...,
        "albumDate": ^.date
    }
}`;
