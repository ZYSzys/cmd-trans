import test from 'ava';
import execa from 'execa';
import { name, version } from './package';
import trans from '.';

test('should show help info', async t => {
  const res = await execa('./cli.js');
  t.is(
    res.stdout,
    `${name} ~ ${version}\nTranslate tools in command line\n  $ trans word\n  $ trans world peace\n  $ trans chinglish`
  );
});

test('should translate hello', async t => {
  const res = await execa('./cli.js', ['hello']);
  t.is(res.code, 0);
});

test('should translate hello world', async t => {
  const res = await execa('./cli.js', ['hello', 'world']);
  t.is(res.stdout.slice(1, 12), 'hello world');
});
