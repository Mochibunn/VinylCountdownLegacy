import { Button, Checkbox, Chip } from '@nextui-org/react';
import { useRefinementList } from 'react-instantsearch';

export default function CustomRefinementList(props) {
  const {
    items,
    refine,
    // searchForItems,
    canToggleShowMore,
    isShowingMore,
    toggleShowMore,
  } = useRefinementList(props);

  return (
    <>
      {/* <Input
        type="search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        maxLength={512}
        onChange={(event) => searchForItems(event.currentTarget.value)}
      /> */}
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <label>
              <Checkbox
                isSelected={item.isRefined}
                onValueChange={() => refine(item.value)}
              />
              <span>{item.label}&nbsp;&nbsp;</span>
              <Chip size='sm' className='text-[10px]'>{item.count}</Chip>
            </label>
          </li>
        ))}
      </ul>
      <Button className='mt-2' color='primary' onPress={toggleShowMore} disabled={!canToggleShowMore}>
        {isShowingMore ? 'Show less' : 'Show more'}
      </Button>
      {/* <button onClick={toggleShowMore} disabled={!canToggleShowMore}>
      </button> */}
    </>
  );
}