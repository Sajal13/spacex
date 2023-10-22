# Installed Dependency for Running The App

## 1. Bootstrap@^5

To install `bootstrap@5` run the command on the Terminal in your project folder:

```sh
    npm install bootstrap --save-dev
```

## 2. react-router-dom@^6

To navigate from one page to another page using the react-router-dom. To install `react-router-dom` run the following command on the terminal.

```sh
    npm install react-router-dom
```

## 3. react-icons

For adding the react icons for display the most amazing icons install `react-icons`. Run the following command in the terminal.

```sh
    npm install react-icons --save-dev
```

## 4. typescript

The main focus of our project is typescript. So to run smoothly the project we need to install `typescript` first. So run the following command on the terminal.

```sh
    npm install typescript
```

After installing typescript we have to configure our project. so write `tsconfig.json` file and paste the following code on the file.

```json
{
    "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noFallthroughCasesInSwitch": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
    },
    "include": ["src"]
}
```

## 5. axios

To data fetching we have used axios library. To install `axios` run the following command.

```sh
    npm install axios
```
