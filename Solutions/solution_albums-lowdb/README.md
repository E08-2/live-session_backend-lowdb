# Albums Project - Adding lowdb

## Instructions

1. Use `npm install lowdb` to add lowdb as a dependency in your `backend` repo.

2. Now create a new directory in your `backend` repo called `data`. This should contain a single new file - the file name should be `db.json`, and its content should be:

```json
{
  "albums": []
}
```

You will use this file to **persist** the data you create using your frontend. 

3. Now, in `index.js` of your `backend` repo, **delete** the `albums` array, where you have been storing your album objects!

4. Your job is now to `import` lowdb and use it in `index.js`. The goal is:
    - Create a `db` object using `lowdb` which has a `data` property containing the current data stored in `db.json`
    - When a `POST` request is received from the frontend to the "/new-album" path, you should add the album object contained in the request to the `albums` array in `db.json`.
    - You should also make sure to **respond** to the request by sending the latest version of the `albums` array in `db.json` back with your response.
    - If you have done this correctly, you **shouldn't** need to change your React frontend code, as it will still receive an array of albums from the backend after the user submits a new album, and map that array to update the UI.

---

## Bonus

5. In case you finish early, please use the `lowdb-explainer.txt` file I have included in this exercise repo to create a brief **step-by-step guide** to how lowdb is working in your backend. What happens:
    - when your server first starts?
    - when your server receives a request to the "/new-album" `POST` route? 

If you want to use the lowdb documentation to add to your understanding when writing your guide, it can be found at the following link: <a href="https://github.com/typicode/lowdb#usage">https://github.com/typicode/lowdb#usage</a>

I will send my version of the guide after class as part of the solution to this exercise. :-)
